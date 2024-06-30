<template>
  <svg>
    <defs>
      <filter id="view-button-lighting">
        <feGaussianBlur
          in="SourceAlpha"
          :stdDeviation="0.5"
          result="blur"
        />
        <feSpecularLighting
          in="blur"
          result="spec"
          :surfaceScale="0.4"
          :specularConstant="1.4"
          :specularExponent="16"
          lighting-color="#ffffff"
        >
          <fePointLight :x="0" :y="-20" :z="30" />
        </feSpecularLighting>
        <feDiffuseLighting
          in="blur"
          result="diff"
          :surfaceScale="0.4"
          :diffuseConstant="0.3"
          lighting-color="#ffffff"
        >
          <fePointLight :x="0" :y="-10" :z="20" />
        </feDiffuseLighting>
        <feComposite
          in="spec"
          in2="diff"
          result="composed"
          operator="arithmetic"
          k1="0" k2="0.5" k3="0.5" k4="0"
        />
        <feComposite
          in="SourceGraphic"
          in2="composed"
          result="lit"
          operator="arithmetic"
          k1="2" k2="0" k3="0" k4="0"
        />
        <feComposite in="lit" in2="SourceAplha" operator="in" />
      </filter>
      <path id="big-btn" d="M 0,-10 C 9,-10 10,-9 10,0 S 9,10 0,10 S -10,9 -10,0 S -9,-10 0,-10 z" />
      <path id="big-cross" d="M 2,-7 v 5 h 5 v 4 h -5 v 5 h -4 v -5 h -5 v -4 h 5 v -5 z" />
    </defs>
  </svg>
</template>

<style lang="scss">
</style>
