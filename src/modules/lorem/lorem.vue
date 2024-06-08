<script setup lang="ts">
import { computed } from 'vue';
import { Lorem } from '@/modules/lorem/lorem';

const props = defineProps<{
  model?: Lorem;
  paragraphs?: number;
}>();

const p = [
  `
  Lorem ipsum dolor sit amet, vis an diam quot nostrum, per te viris tacimates. Placerat
  patrioque cu per, vim et vituperata signiferumque, quo admodum appellantur accommodare ex. Nec
  et alii volutpat, ne reque voluptatum cum, accumsan constituto eu his. Cu congue discere
  concludaturque nam, ut erat quaeque mel. Veritus fastidii maiestatis ex vis.
  `,
  `
  Est ut agam forensibus scripserit, populo maiorum vim ea, eos impetus voluptatum an. In sea
  simul eirmod iuvaret, vix ne docendi perpetua. Quo te aliquam persecuti accommodare, sed
  affert argumentum et. Ne doming definiebas quo, cu nec eirmod audire, persecuti voluptatibus
  no pro. Probatus hendrerit has in, cum cu diam liberavisse. Qui no lucilius dissentiunt. Eam
  ut unum nonumes, eu detracto interesset sit.
  `,
  `
  Eirmod vulputate disputationi pri in, ea postea detraxit platonem sed. Ex ancillae quaerendum
  cum, no probatus incorrupte cum. Feugait consetetur nam cu. Atqui reprehendunt pri in, eam
  case prima at, eu cum malorum eloquentiam. Mei sumo nonumy corrumpit ex, in nominavi
  interpretaris mel. Vim cu lorem nonumes recusabo, his quod errem insolens et.
  `,
  `
  Homero facilisi eam eu. Sea dicat feugait fabellas at, ei est modo elitr, per ut iuvaret
  epicuri fierent. Eu eum ludus populo hendrerit. Eu quem causae appellantur pro. Pro ad sint
  petentium repudiandae, ius et eius legimus officiis, an est magna quando admodum.
  `,
  `
  Sea ea reque molestie, principes definitiones te usu. Sit ei illum accusam, id ius omnis
  cetero maluisset, eam et saepe voluptua democritum. Mea erroribus dissentiet ne, ne sed quot
  falli. Mea vidit labitur eu, ad dicam melius audiam usu. Per in tempor audire consulatu. In
  sonet vivendum delicata vis.
  `,
  `
  Elitr vocibus et per, mea eu maiorum explicari. Cu usu aliquid luptatum, fabellas
  conclusionemque ut nam. Id primis vulputate incorrupte vix, pro libris impetus ad. Dolor
  quidam option ne per, ad eos aliquip sensibus. Te eam tamquam cotidieque. Mei quot zril vitae
  ex, porro integre ad qui.
  `,
  `
  Possim noluisse qui an. Eos cu quod timeam alienum, quo debitis similique ne. Tempor dolorem
  fierent vis no, ad nihil denique concludaturque vis. Et dico dolor qualisque pro, ipsum
  saperet suavitate cu vim. Latine feugiat inimicus eum no, vel ne virtute bonorum
  vituperatoribus.
  `,
  `
  Tollit eripuit ne nam. His ei euripidis incorrupte, pro oratio possit quaeque cu. Cu placerat
  petentium has, id quot voluptatum est, meliore dissentiunt has te. Quo dolorem eloquentiam
  dissentiunt ex. Tation dolorum explicari sed ex.
  `,
  `
  Ad noster impetus eum. Vix option sanctus et, te eos ornatus referrentur. An pri debet impedit
  adipisci, et erant volutpat definitionem usu, ex enim habemus duo. Usu noster dignissim
  philosophia ne, te vis sale oblique gubergren.
  `,
  `
  Has in decore urbanitas, mazim labitur ocurreret cum et, cu cum denique intellegat. Sea ei
  vituperata delicatissimi, at cum homero ornatus sensibus. Ne nibh scripserit cotidieque pro,
  impetus offendit deseruisse est eu. Option aperiri necessitatibus at usu, pericula dissentiet
  ea eam, conceptam assueverit eam cu. Vis pertinax patrioque aliquando ex.
  `,
];

const n = computed(() => (props.model?.paragraphs ?? props.paragraphs ?? p.length));
</script>

<template>
  <div class="lorem">
    <p v-for="i in n" :key="i">
      {{ p[i-1] }}
    </p>
  </div>
</template>

<style lang="scss">
.lorem {
  max-width: 40em;
}
</style>
