
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="5a137f0e-70cb-5a3a-9e97-f9669bc0b56a")}catch(e){}}();
import{t as e}from"./defineProperty-BbfpZ9Tg.js";import{a as t,c as n,d as r,f as i,i as a,l as o,o as s,p as c,s as l,u}from"./BridgeOrb-DaI4-RPG.js";var d=.05;function f(e,t){return e>0?Math.max(1,Math.min(Math.round(e*Math.min(Math.max(t,1),2)),640)):0}var p=`#version 300 es
in vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}`,m=`#version 300 es
precision highp float;

out vec4 fragColor;

uniform vec2 uResolution;
uniform float uTime;
uniform float uLevel;
uniform float uEnergy;
uniform vec3 uAbyss;
uniform vec3 uCore;
uniform vec3 uIon;
uniform vec3 uOrchid;
uniform vec3 uAccent;

const float CAM_D = 2.8;
const int STEPS = 20;
// Index of refraction of the shell. Glass is ~1.5; a touch under it keeps the
// lens effect gentle enough that the core never flips.
const float IOR = 1.42;

float hash(vec3 p) {
  p = fract(p * 0.3183099 + vec3(0.1, 0.2, 0.3));
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}

float noise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(
      mix(hash(i + vec3(0.0, 0.0, 0.0)), hash(i + vec3(1.0, 0.0, 0.0)), f.x),
      mix(hash(i + vec3(0.0, 1.0, 0.0)), hash(i + vec3(1.0, 1.0, 0.0)), f.x),
      f.y),
    mix(
      mix(hash(i + vec3(0.0, 0.0, 1.0)), hash(i + vec3(1.0, 0.0, 1.0)), f.x),
      mix(hash(i + vec3(0.0, 1.0, 1.0)), hash(i + vec3(1.0, 1.0, 1.0)), f.x),
      f.y),
    f.z);
}

float fbm(vec3 p) {
  float s = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    s += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return s;
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution) / uResolution.y;
  float luv = length(uv);

  // One-pixel analytic edge so the silhouette is smooth without MSAA.
  float px = 2.0 / uResolution.y;
  float cov = 1.0 - smoothstep(1.0 - px * 1.5, 1.0, luv);
  // 1 at control scale (the 16px badge is a 32px buffer at 2x), 0 on stage.
  // The studio lighting below is tuned for a 200px orb; in a handful of
  // pixels its stretched softbox reads as a slash and its edge line as a
  // hard ring, so both give way to a rounder, quieter treatment.
  float small = 1.0 - smoothstep(56.0, 112.0, uResolution.y);
  if (cov <= 0.0) {
    fragColor = vec4(0.0);
    return;
  }

  float k = inversesqrt(CAM_D * CAM_D - 1.0);
  vec3 ro = vec3(0.0, 0.0, -CAM_D);
  vec3 rd = normalize(vec3(uv * k, 1.0));

  float b = dot(ro, rd);
  float c0 = dot(ro, ro);
  float h = sqrt(max(b * b - (c0 - 1.0), 0.0));
  float tN = -b - h;

  vec3 p0 = ro + rd * tN;
  vec3 nor = normalize(p0);

  // Key light upper-left. The unlit lower-right falls
  // into a terminator, which is most of the 3D read.
  vec3 L = normalize(vec3(-0.45, 0.62, -0.64));
  float diff = max(dot(nor, L), 0.0);
  float facing = max(dot(nor, -rd), 0.0);
  float fr = 1.0 - facing;
  // Schlick reflectance of the shell: ~4% head-on, everything at the limb.
  float F = 0.04 + 0.96 * pow(fr, 5.0);

  // Per-pixel march offset; reused as the final dither. Interleaved gradient
  // noise rather than the sin() hash: fast-math sin() on a 40k-radian
  // argument is not a hash on every GPU.
  float jit = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));

  // -- Refraction into the shell -------------------------------------------
  // The interior is seen through glass, so march along the *refracted* ray.
  // Rays near the limb bend toward the centre, which magnifies the heart and
  // leaves a dark band of thick glass just inside the rim — the two things
  // that make a sphere read as glass rather than as a disc with a gradient.
  vec3 rr = refract(rd, nor, 1.0 / IOR);
  // p0 is on the unit sphere, so the exit along rr is at t = -2 (p0·rr).
  float bq = dot(p0, rr);
  float tExit = -2.0 * bq;

  // -- Volumetric plasma heart --------------------------------------------
  // Smaller than the unrefracted heart was: the shell's lens magnifies it
  // about 1.3x on the way out.
  // At control scale the heart fills more of the ball, so 16px reads as a
  // lit orb rather than a dark bead with a pupil.
  float coreR = 0.24 + uEnergy * 0.17 + uLevel * 0.15 + small * 0.08;
  float bound = coreR + 0.40;
  vec3 glow = vec3(0.0);

  float hb = bq * bq - (1.0 - bound * bound);
  if (hb > 0.0) {
    float sb = sqrt(hb);
    float t0 = max(-bq - sb, 0.0);
    float t1 = min(-bq + sb, tExit);
    if (t1 > t0) {
      // March only the span that crosses the heart, not the whole chord.
      float dt = (t1 - t0) / float(STEPS);
      float t = t0 + dt * jit;
      float trans = 1.0;

      for (int i = 0; i < STEPS; i++) {
        vec3 p = p0 + rr * t;
        t += dt;
        float r = length(p);

        float w1 = noise(p * 2.4 + vec3(0.0, uTime * 0.23, uTime * 0.08));
        float w2 = noise(p * 3.1 + vec3(4.7, uTime * -0.19, 2.1));
        vec3 q = p * 4.6 + vec3(w1, w2, w1 * 0.55 + w2 * 0.45) * 1.35;
        float n = fbm(q + vec3(0.0, uTime * -0.30, uTime * 0.12));

        // A smooth radial falloff that the noise carves filaments out of —
        // not a noise field clipped to a ball. The ridge term draws thin veins
        // where the noise crosses its midline, so the mass has structure
        // instead of reading as a cloud.
        float fall = exp(-pow(r / coreR, 2.3) * 2.6);
        float fil = smoothstep(0.36 - uLevel * 0.06, 0.68 - uLevel * 0.04, n);
        float vein = 1.0 - smoothstep(0.0, 0.15, abs(n - 0.5));
        float nucleus = exp(-pow(r / (coreR * 0.36), 2.0) * 2.6);
        float dens = fall * (0.42 + 0.55 * fil + 0.40 * vein) + nucleus * 1.1;

        // Deep blue at the edge of the mass, ion cyan through the filaments,
        // orchid in the eddies, white only at the nucleus.
        vec3 c = mix(uCore, uIon, smoothstep(0.30, 0.78, n));
        c = mix(c, uOrchid, clamp(w2 * 1.6 - 0.45, 0.0, 1.0) * 0.6);
        c = mix(c, vec3(1.0), nucleus * (0.28 + uEnergy * 0.30 + uLevel * 0.18));

        float a = dens * dt * (6.4 + uEnergy * 6.2 + uLevel * 2.0);
        glow += c * a * trans;
        trans *= 1.0 - min(a * 0.30, 0.85);
      }
    }
  }
  glow *= 0.6 + uEnergy * 1.15;
  // Roll the highlights off by luminance so a loud core gets brighter cyan,
  // not a white cotton ball — the difference between "plasma" and "bulb".
  float lum = dot(glow, vec3(0.2126, 0.7152, 0.0722));
  glow *= 1.0 / (1.0 + lum * 0.55);

  // -- Glass shell ----------------------------------------------------------
  // Glass is not matte: the body is near-black tinted abyss, so the heart is
  // the light source and the shell is read from what it reflects and refracts.
  vec3 col = uAbyss * (0.10 + 0.30 * (diff * 0.42 + diff * diff * 0.58)) * (1.0 + small * 0.5);

  // The heart, seen through the shell: the reflected fraction is lost.
  col += glow * (1.0 - F * 0.75);

  // A studio environment mirrored in the shell — cool light from above,
  // darkness below — weighted by fresnel so it lives on the limb and stays
  // off the face.
  vec3 R = reflect(rd, nor);
  float sky = smoothstep(-0.45, 0.95, R.y);
  vec3 env = mix(uAbyss * 0.9, vec3(0.50, 0.63, 0.88), sky);
  col += env * F * 0.55;

  // Light bleeding through the thin limb, biased toward the key light so the
  // shell reads translucent without ringing the whole silhouette.
  col += uCore * 0.16 * pow(fr, 2.4) * (0.45 + 0.55 * diff);

  // Key highlight: a soft reflected softbox, stretched sideways and kept
  // well under white, so the shell reads as polished glass without a hard
  // glint disc (which, with a second small highlight, reads as an eye).
  vec3 H = normalize(L - rd);
  vec3 squash = mix(vec3(0.62, 1.0, 1.0), vec3(1.0), small);
  float ndh = max(dot(normalize(nor * squash), normalize(H * squash)), 0.0);
  col += vec3(0.88, 0.94, 1.0)
    * (smoothstep(0.986, 0.998, ndh) * 0.24 + pow(ndh, 120.0) * 0.12) * (1.0 - small);
  // At control scale: one soft, round catch-light the size of a few pixels.
  col += vec3(0.86, 0.93, 1.0) * pow(ndh, 36.0) * 0.30 * small;
  // A broad, faint glaze under the hot spot so the glass has a sheen.
  col += vec3(0.62, 0.76, 1.0) * pow(ndh, 14.0) * 0.05;

  // Rim light: a back light behind and above the sphere edges the limb on the
  // lit side, dispersed per channel so it has a chromatic edge. The accent
  // ink carries the state here.
  vec3 Lb = normalize(vec3(-0.35, 0.55, 0.75));
  float back = 0.42 + 0.58 * max(dot(nor, Lb), 0.0);
  vec3 rim = vec3(pow(fr, 4.2), pow(fr, 3.6), pow(fr, 3.0));
  col += uAccent * rim * back * (0.55 + 0.85 * uEnergy + uLevel * 0.45) * (1.0 - small * 0.45);
  // A thin, even edge line in the accent so the silhouette holds on dark
  // chrome at control scale, where the chromatic rim is a pixel or two.
  // At control scale it is a faint hairline, not a lit ring.
  float edge = smoothstep(1.0 - px * 3.0, 1.0 - px * 0.5, luv);
  col += uAccent * edge * (0.35 + 0.25 * uEnergy) * (1.0 - small * 0.7);

  // Internal reflection exiting the lower limb: the bright caustic arc under
  // a lit glass sphere, in the heart's own ink.
  float bounce = pow(max(dot(nor, normalize(vec3(0.18, -1.0, -0.15))), 0.0), 7.0);
  col += mix(uCore, uIon, 0.5) * bounce * pow(fr, 1.5) * (0.35 + 0.35 * uEnergy);

  // Deep-blue gradients band badly at 8 bit; dither below one LSB.
  col += (jit - 0.5) / 255.0;

  fragColor = vec4(max(col, 0.0), cov);
}`,h=[`uResolution`,`uTime`,`uLevel`,`uEnergy`,`uAbyss`,`uCore`,`uIon`,`uOrchid`,`uAccent`],g={alpha:!0,premultipliedAlpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0,powerPreference:`low-power`,failIfMajorPerformanceCaveat:!1},_=!1,v=class{constructor(t,n,r=s){e(this,`canvas`,void 0),e(this,`driver`,void 0),e(this,`base`,void 0),e(this,`gl`,null),e(this,`program`,null),e(this,`buffer`,null),e(this,`vao`,null),e(this,`uniforms`,new Map),e(this,`fallback`,!1),e(this,`fallbackReason`,null),e(this,`buildError`,null),e(this,`disposed`,!1),e(this,`bufferPx`,0),e(this,`energy`,u(`idle`,0)),e(this,`accent`,void 0),e(this,`inks`,void 0),e(this,`smoothedLevel`,0),e(this,`phase`,0),e(this,`lastFrame`,0),e(this,`onContextLost`,e=>{e.preventDefault(),this.releaseGlObjects(),this.gl=null}),e(this,`onContextRestored`,()=>{this.disposed||(this.gl=null,this.program=null,this.ensureContext()&&this.bufferPx>0&&this.applyBufferSize(this.bufferPx))}),this.canvas=t,this.driver=n,this.base=r,this.accent=o(`idle`,r),this.inks=r,t.addEventListener(`webglcontextlost`,this.onContextLost),t.addEventListener(`webglcontextrestored`,this.onContextRestored)}isFallbackActive(){return this.fallback}getFallbackReason(){return this.fallbackReason}resize(e,t){let n=f(e,t);n!==0&&n!==this.bufferPx&&(this.bufferPx=n,this.applyBufferSize(n))}render(e,s){if(this.disposed||this.fallback)return!1;let f=this.ensureContext();if(!f||!this.program||this.bufferPx===0)return!1;let p=this.lastFrame===0?a:s-this.lastFrame;this.lastFrame=s;let m=Math.min(Math.max(this.driver.level,0),1),h=m>this.smoothedLevel?.55:.18;this.smoothedLevel+=(m-this.smoothedLevel)*(p>=.25?1:h);let g=c(this.smoothedLevel);this.driver.displayLevel=g,this.energy=n(this.energy,u(e,g),p),this.accent=l(this.accent,o(e,this.base),p);let _=r(e,this.base);this.inks={abyss:l(this.inks.abyss,_.abyss,p),core:l(this.inks.core,_.core,p),ion:l(this.inks.ion,_.ion,p),orchid:l(this.inks.orchid,_.orchid,p),alert:_.alert},this.phase+=Math.min(Math.max(p,0),d)*(i(e)+g*t),f.useProgram(this.program),this.vao&&f.bindVertexArray(this.vao);let v=this.uniforms,y=this.bufferPx;return f.uniform2f(v.get(`uResolution`)??null,y,y),f.uniform1f(v.get(`uTime`)??null,this.phase),f.uniform1f(v.get(`uLevel`)??null,g),f.uniform1f(v.get(`uEnergy`)??null,this.energy),this.setInk(`uAbyss`,this.inks.abyss),this.setInk(`uCore`,this.inks.core),this.setInk(`uIon`,this.inks.ion),this.setInk(`uOrchid`,this.inks.orchid),this.setInk(`uAccent`,this.accent),f.clearColor(0,0,0,0),f.clear(f.COLOR_BUFFER_BIT),f.drawArrays(f.TRIANGLE_STRIP,0,4),!0}dispose(){this.disposed||(this.disposed=!0,this.canvas.removeEventListener(`webglcontextlost`,this.onContextLost),this.canvas.removeEventListener(`webglcontextrestored`,this.onContextRestored),this.releaseGlObjects(),this.gl=null)}setInk(e,t){this.gl?.uniform3f(this.uniforms.get(e)??null,t[0],t[1],t[2])}applyBufferSize(e){this.canvas.width=e,this.canvas.height=e;let t=this.ensureContext();t&&t.viewport(0,0,e,e)}ensureContext(){if(this.fallback||this.disposed)return null;if(this.gl&&this.program)return this.gl.isContextLost()?null:this.gl;try{let e=this.gl??this.canvas.getContext(`webgl2`,g);return e?(this.gl=e,e.isContextLost()?null:!this.program&&!this.buildProgram(e)?(this.failWith(this.buildError??`shader program build failed`),null):e):(this.failWith(`no webgl2 context available on this canvas`),null)}catch(e){return this.failWith(`context creation threw: ${String(e)}`),null}}failWith(e){this.fallback=!0,this.fallbackReason=e,_||(_=!0,console.warn(`[BridgeOrb] using the CSS fallback sphere — ${e}`))}buildProgram(e){this.buildError=null;let t=this.compile(e,e.VERTEX_SHADER,p,`vertex`),n=this.compile(e,e.FRAGMENT_SHADER,m,`fragment`);if(!t||!n)return t&&e.deleteShader(t),n&&e.deleteShader(n),!1;let r=e.createProgram();if(!r)return this.buildError=`createProgram returned null`,e.deleteShader(t),e.deleteShader(n),!1;if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),e.deleteShader(t),e.deleteShader(n),!e.getProgramParameter(r,e.LINK_STATUS))return this.buildError=`link failed: ${e.getProgramInfoLog(r)??`no log`}`,e.deleteProgram(r),!1;let i=e.createBuffer(),a=e.createVertexArray();if(!i||!a)return this.buildError=`could not allocate the quad buffer or VAO`,e.deleteProgram(r),i&&e.deleteBuffer(i),a&&e.deleteVertexArray(a),!1;e.bindVertexArray(a),e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);let o=e.getAttribLocation(r,`aPos`);return e.enableVertexAttribArray(o),e.vertexAttribPointer(o,2,e.FLOAT,!1,0,0),e.bindVertexArray(null),this.program=r,this.buffer=i,this.vao=a,this.uniforms=new Map(h.map(t=>[t,e.getUniformLocation(r,t)])),!0}releaseGlObjects(){let e=this.gl;if(e){try{this.vao&&e.deleteVertexArray(this.vao),this.buffer&&e.deleteBuffer(this.buffer),this.program&&e.deleteProgram(this.program)}catch{}this.vao=null,this.buffer=null,this.program=null,this.uniforms.clear()}}compile(e,t,n,r){let i=e.createShader(t);return i?(e.shaderSource(i,n),e.compileShader(i),e.getShaderParameter(i,e.COMPILE_STATUS)?i:(this.buildError=e.isContextLost()?`${r} compile could not run: context is lost`:`${r} compile failed: ${e.getShaderInfoLog(i)??`no log`}`,e.deleteShader(i),null)):(this.buildError=`createShader returned null for the ${r} stage${e.isContextLost()?` (context is lost)`:``}`,null)}};export{v as OrbRenderer};
//# debugId=5a137f0e-70cb-5a3a-9e97-f9669bc0b56a
