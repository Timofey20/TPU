<template lang="">
  <form class="wrapper">
    <div class="row">
      <div class="col">Тип здания (сооружения)</div>
      <div class="col">
        <select class="form-select">
          <option value="2" selected>Прямоугольной формы</option>
        </select>
      </div>
    </div>
    <div class="row">
      <div class="col">Длина (<b>A</b>) здания (сооружения)</div>
      <div class="col">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              ><b>A&nbsp;=&nbsp;{{ L }}</b></span
            >
          </div>
          <input
            required=""
            class="form-control"
            type="number"
            :value="L"
            @change="(v) => (L = v.target.value)"
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
              ><b>B&nbsp;=&nbsp;{{ W }}</b></span
            >
          </div>
          <input
            required=""
            class="form-control"
            type="number"
            :value="W"
            @change="(v) => (W = v.target.value)"
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
              ><b>hx&nbsp;=&nbsp;{{ H0 }}</b></span
            >
          </div>
          <input
            required=""
            class="form-control"
            type="number"
            :value="H0"
            @change="(v) => (H0 = v.target.value)"
          />
          <div class="input-group-append">
            <span class="input-group-text" id="basic-addon2">м</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">Полная высота стержневого молниеотвода <b>h</b></div>
      <div class="col">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1"
              ><b>h&nbsp;=&nbsp;{{ H }}</b></span
            >
          </div>
          <input
            required=""
            class="form-control"
            type="number"
            :value="H"
            @change="(v) => (H = v.target.value)"
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
            :value="item"
            v-model="typeOfDefence"
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
        <select v-model="numberLightningStrikes" class="form-select mb-3">
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
              ><b>n&nbsp;=&nbsp;{{ numberLightningStrikes }}</b></span
            >
          </div>
          <input
            class="form-control"
            type="number"
            :value="numberLightningStrikes"
            @change="(v) => (numberLightningStrikes = v.target.value)"
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
      <div class="col">Средняя продолжительность (<b>tср</b>) гроз в год</div>
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

    <h4 class="text-center mb-3 mt-5">Выбор типа зоны защиты:</h4>
    <table class="table table-bordered table-hover">
      <thead class="table-info">
        <tr style="background: #99ccff">
          <td></td>
          <td>Здания и сооружения</td>
          <td>Местоположение</td>
          <td>
            Тип зоны защиты при использовании стержневых и тросовых
            молниеотводов
          </td>
          <td>Категория молниезащиты</td>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="95-1"
            />
          </td>
          <td>
            Здания и сооружения или их части, помещения которых согласно ПУЭ
            относятся к зонам классов В-I и В-II
          </td>
          <td>На всей территории СНГ</td>
          <td>Зона А</td>
          <td>I</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="95-2"
            />
          </td>
          <td>
            Здания и сооружения или их части, помещения которых согласно ПУЭ
            относятся к зонам классов В-Iа, В-Iб, В-IIа
          </td>
          <td>
            В местностях со средней продолжительностью гроз 10 ч в год и более
          </td>
          <td>Зона Б</td>
          <td>II</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="90-3"
            />
          </td>
          <td>Наружные установки, создающие согласно ПУЭ зону класса В-Iг</td>
          <td>На всей территории СНГ</td>
          <td>Зона Б</td>
          <td>II</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="90-4"
            />
          </td>
          <td>
            Расположенные в сельской местности небольшие строения III — V
            степеней огнестойкости, помещения которых согласно ПУЭ относятся к
            зонам классов П-I, П-II, П-IIа
          </td>
          <td>
            В местностях со средней продолжительностью гроз 20 ч в год и более
          </td>
          <td>
            не требуется использование стержневых и тросовых молниеотводов
          </td>
          <td>III</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="90-5"
            />
          </td>
          <td>
            Небольшие строения III-V степеней огнестойкости, расположенные в
            сельской местности, в которых отсутствуют помещения, относимые по
            ПУЭ к зонам взрыво и пожароопасных классов
          </td>
          <td>
            В местностях со средней продолжительностью гроз 20 ч в год и более
            для IVa степени огнестойкости
          </td>
          <td>
            не требуется использование стержневых и тросовых молниеотводов
          </td>
          <td>III</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="95-6"
            />
          </td>
          <td>
            Здания вычислительных центров, в том числе расположенные в городской
            застройке
          </td>
          <td>
            В местностях со средней продолжительностью гроз 20 ч в год и более
          </td>
          <td>Зона Б</td>
          <td>II</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="90-7"
            />
          </td>
          <td>
            Дымовые и прочие трубы предприятий и котельных, башни и вышки всех
            назначений высотой 15 м и более
          </td>
          <td>
            В местностях со средней продолжительностью гроз 10 ч в год и более
          </td>
          <td>
            не требуется использование стержневых и тросовых молниеотводов
          </td>
          <td>III</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="95-8"
            />
          </td>
          <td>
            Жилые и общественные здания, высота которых более чем на 25 м
            превышает среднюю высоту окружающих зданий в радиусе 400 м, а также
            отдельно стоящие здания высотой более 30 м, удаленные от других
            зданий более чем на 400 м
          </td>
          <td>
            В местностях со средней продолжительностью гроз 20 ч в год и более
          </td>
          <td>Зона Б</td>
          <td>III</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="95-9"
            />
          </td>
          <td>
            Отдельно стоящие жилые и общественные здания в сельской местности
            высотой более 30 м
          </td>
          <td>
            В местностях со средней продолжительностью гроз 20 ч в год и более
          </td>
          <td>Зона Б</td>
          <td>III</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="95-10"
            />
          </td>
          <td>
            Общественные здания III-V степеней огнестойкости следующего
            назна-чения: детские дошкольные учреждения, школы и школыинтернаты,
            стационарых лечебных учреждений, спальные корпуса и столовые
            учреждений здравоохранения и отдыха, культурнопросветительные и
            зрелищные учреждения, административные здания, вокзалы, гостиницы,
            мотели и кемпинги
          </td>
          <td>
            В местностях со средней продолжительностью гроз 20 ч в год и более
          </td>
          <td>Зона Б</td>
          <td>III</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="90-11"
            />
          </td>
          <td>
            Открытые зрелищные учреждения (зрительные залы открытых кинотеатров,
            трибуны открытых стадионов и т.п.)
          </td>
          <td>
            В местностях со средней продолжительностью гроз 20 ч в год и более
          </td>
          <td>Зона Б</td>
          <td>III</td>
        </tr>
        <tr>
          <td bgcolor="green">
            <input
              v-model="classOfDefence"
              type="radio"
              name="nm"
              value="95-12"
            />
          </td>
          <td>
            Здания и сооружения, являющиеся памятниками истории, архитектуры и
            культуры (скульптуры, обелиски и т.п.)
          </td>
          <td>
            В местностях со средней продолжительностью гроз 20 ч в год и более
          </td>
          <td>Зона Б</td>
          <td>III</td>
        </tr>
      </tbody>
    </table>
    <div v-if="ValidationError !== ''" class="alert alert-danger" role="alert">
      {{ ValidationError }}
    </div>
    <button
      @click="calculate_form()"
      type="button"
      class="btn btn-primary mb-3"
    >
      Посчитать
    </button>
  </form>
  <button style="display: none;" type="button" class="btn btn-primary" id="mdlOpenBtn" data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Joi from "joi";

export default {
  computed: {},
  methods: {
    async calculate_form() {
      try {
        await this.schema.validateAsync({
          "Длина здания": this.L,
          "Ширина здания": this.H,
          "Высота здания": this.H0,
          "Полная высота стержневого молниеотвода": this.H,
          "Средняя продолжительность tср гроз в год": this.time,
          "Тип молниезащиты": this.typeOfDefence,
          "Удельная плотность ударов молнии в землю":
            this.numberLightningStrikes,
          "Выбор типа зоны защиты": this.classOfDefence,
        });
        this.ValidationError = "";
      } catch (err) {
        this.ValidationError = err;
        return false;
      }

      let left = Math.sqrt(this.L * this.L + this.W * this.W) / 2;
      let answer =
        this.classOfDefence[1] === "5"
          ? this.calculate_Rx_A()
          : this.calculate_Rx_B();
          
      console.log(left, answer, this.calculate_N());
      document.getElementById('mdlOpenBtn').click()
      if (left < answer) {
        alert("Объект защищен");
      } else {
        alert("Объект не защищен");
      }
      return false;
    },
    calculate_N() {
      let ans =
        ((+this.W + 6 * +this.H0) * (+this.L + 6 * +this.H0) -
          7.7 * (+this.H0 * +this.H0)) *
        +this.numberLightningStrikes *
        0.000001;
      return ans;
    },
    calculate_H0() {
      return this.H0 * 0.85;
    },
    calculate_Rx_A() {
      let ans = (1.1 - 0.002 * +this.H) * (+this.H - 1.2 * +this.H0);
      return ans;
    },
    calculate_Rx_B() {
      let ans = 1.5 * (+this.H - 1.1 * +this.H0);
      return ans;
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
      // пункт перегрузки угля (1 вариант)
      L: 24, // длина здания
      W: 12, // ширина здания
      H0: 18, // Высота здания
      H: 30, // Полная высота стержневого молниеотвода
      time: null,
      typeOfDefence: null,
      numberLightningStrikes: "",
      classOfDefence: null,
      schema: Joi.object({
        "Длина здания": Joi.number().required(),
        "Ширина здания": Joi.number().required(),
        "Высота здания": Joi.number().required(),
        "Полная высота стержневого молниеотвода": Joi.number().required(),
        "Тип молниезащиты": Joi.string().required(),
        "Удельная плотность ударов молнии в землю": Joi.string().required(),
        "Средняя продолжительность tср гроз в год": Joi.number().required(),
        "Выбор типа зоны защиты": Joi.string().required(),
      }),
      ValidationError: "",
    };
  },
};
</script>

h0 - высота стержня (без молниеотвода) hx (h3) - высота объекта h - (высота
стержня + высота молниетвода)
