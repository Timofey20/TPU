<template lang="">
  <div class="container">
    <div class="row">
      <div class="col">Тип здания (сооружения)</div>
      <div class="col">
        <select class="form-select">
          <option value="1">
            Сосредоточенное (дымовые трубы, вышки, башни)
          </option>
          <option value="2" selected>Прямоугольной формы</option>
          <option value="3">Протяженный</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col">Длина (<b>A</b>) здания (сооружения)</div>
      <div class="col">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              ><b>A&nbsp;=&nbsp;{{ width }}</b></span
            >
          </div>
          <input
            required=""
            class="form-control"
            type="number"
            :value="width"
            @change="(v) => (width = v.target.value)"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">м</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">Ширина (<b>B</b>) здания (сооружения)</div>
      <div class="col">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              ><b>B&nbsp;=&nbsp;{{ length }}</b></span
            >
          </div>
          <input
            required=""
            class="form-control"
            type="number"
            :value="length"
            @change="(v) => (length = v.target.value)"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">м</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">Максимальная высота (<b>hx</b>) здания (сооружения)</div>
      <div class="col">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              ><b>hx&nbsp;=&nbsp;{{ height }}</b></span
            >
          </div>
          <input
            required=""
            class="form-control"
            type="number"
            :value="height"
            @change="(v) => (height = v.target.value)"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">м</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h4 class="text-center">Тип молниезащиты:</h4>
        <label
          class="form-check"
          v-for="(item, index) in typeOfDef"
          :key="index"
        >
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            :id="`flexRadioDefault${index}`"
          />
          <a
            data-fancybox="gallery"
            :src="require(`@/img/light${index + 1}.jpg`)"
            :data-caption="item"
          >
            <img class="image" :src="require(`@/img/light${index + 1}.jpg`)" />
          </a>
          <p class="form-check-label" :for="`flexRadioDefault${index}`">
            {{ item }}
          </p>
        </label>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p>Удельная плотность ударов молнии в землю (<b>n</b>)</p>
        <a
          data-fancybox="gallery"
          :src="require(`@/img/light8.jpg`)"
          data-caption="Карта средней за год продолжительности гроз в часах для территории бывшего СССР"
        >
          <img class="image" :src="require(`@/img/light8.jpg`)" />
        </a>
      </div>
      <div class="col">
        <select class="form-select mb-3">
          <option value="">== Выбрать ==</option>
          <option value="1">n=1 (tср=10..20)</option>
          <option value="2">n=2 (tср=21..40)</option>
          <option value="4">n=4 (tср=41..60)</option>
          <option value="5.5">n=5.5 (tср=61..80)</option>
          <option value="7">n=7 (tср=81..100)</option>
          <option value="8.5">n=8.5 (tср&gt;100)</option>
        </select>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              ><b>n&nbsp;=&nbsp;{{ quantytime }}</b></span
            >
          </div>
          <input
            class="form-control"
            type="number"
            :value="quantytime"
            @change="(v) => (quantytime = v.target.value)"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2"
              >1/км<sup>2</sup>·год</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              ><b>tср&nbsp;=&nbsp;{{ time }}</b></span
            >
          </div>
          <input
            class="form-control"
            type="number"
            :value="time"
            @change="(v) => (time = v.target.value)"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">ч/год</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {},
  methods: {
    setMsg(item) {
      console.log(item.target.value);
    },
  },
  data() {
    return {
      typeOfDef: [
        "Одиночный стержневой молниеотвод",
        "Двойной стержневой молниеотвод равной длины",
        "Двойной стержневой молниеотвод разной длины",
        "Многократный стержневой молниеотвод",
        "Одиночный тросовый молниеотвод",
        "Двойной тросовый молниеотвод одинаковой высоты",
        "Двойной тросовый молниеотвод разной высоты",
      ],
      width: null,
      height: null,
      length: null,
      time: null,
      quantytime: null,
    };
  },
};
</script>
