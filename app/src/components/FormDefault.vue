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
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">Ширина (<b>B</b>) здания (сооружения)</div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col">Максимальная высота (<b>hx</b>) здания (сооружения)</div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col text-center">
        <p>Тип молниезащиты:</p>
      </div>
      <div class="col">
        <img v-photoswipe src="@/img/light1.jpg" alt="" />
        <input type="radio" checked="" name="type" value="1" /> Одиночный
        стержневой молниеотвод (рис. 1)<br />
        <input type="radio" name="type" value="2" /> Двойной стержневой
        молниеотвод равной длины (рис. 2)<br />
        <input type="radio" name="type" value="3" /> Двойной стержневой
        молниеотвод разной длины (рис. 3)<br />
        <input type="radio" name="type" value="4" /> Многократный стержневой
        молниеотвод (рис. 4)<br />
        <input type="radio" name="type" value="5" /> Одиночный тросовый
        молниеотвод (рис. 5)<br />
        <input type="radio" name="type" value="6" /> Двойной тросовый
        молниеотвод одинаковой высоты (рис. 6)<br />
        <input type="radio" name="type" value="7" /> Двойной тросовый
        молниеотвод разной высоты (рис. 7)<br />
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormDefault",
  mounted() {
    this.$photoswipe.listen("beforeChange", this.beforeChange);
  },
  // beforeDestroy() {
  //   this.$photoswipe.unlisten("beforeChange", this.beforeChange);
  // },
  methods: {
    beforeChange(...args) {
      console.log("beforeChange", ...args); // eslint-disable-line
    },
  },
};
</script>
