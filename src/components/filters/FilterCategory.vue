<template>
    <div class="input-checkbox" v-if="category">
        <input type="checkbox" :id=" 'category-'+ category.id ">
        <label :for=" 'category-'+ category.id">
            <span></span>
            {{ category.title }}
        </label>
    </div>
</template>

<script>
export default{
    props: ["category","selected"],
}
</script>

<style>
/*-- checkbox & radio input --*/

.input-radio, .input-checkbox {
  position: relative;
  display: block;
}

.input-radio input[type="radio"]:not(:checked), .input-radio input[type="radio"]:checked, .input-checkbox input[type="checkbox"]:not(:checked), .input-checkbox input[type="checkbox"]:checked {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.input-radio input[type="radio"]:not(:checked), .input-radio input[type="radio"]:checked, .input-checkbox input[type="checkbox"]:not(:checked), .input-checkbox input[type="checkbox"]:checked {
  position: absolute;
  margin-left: -9999px;
  visibility: hidden;
}

.input-radio label, .input-checkbox label {
  font-weight: 500;
  min-height: 20px;
  padding-left: 20px;
  margin-bottom: 5px;
  cursor: pointer;
}
.input-radio input[type="radio"]+label span, .input-checkbox input[type="checkbox"]+label span {
  position: absolute;
  left: 0px;
  top: 4px;
  width: 14px;
  height: 14px;
  border: 2px solid #E4E7ED;
  background: #FFF;
}
.input-checkbox input[type="checkbox"]+label span:after {
  content: '✔';
  position: absolute;
  top: -2px;
  left: 1px;
  font-size: 10px;
  color: #FFF;
  opacity: 0;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}
.input-radio input[type="radio"]:checked+label span, .input-checkbox input[type="checkbox"]:checked+label span {
  background-color: #D10024;
  border-color: #D10024;
}
.input-checkbox input[type="checkbox"]:checked+label span:after {
  opacity: 1;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}
.input-radio .caption, .input-checkbox .caption {
  margin-top: 5px;
  max-height: 0;
  overflow: hidden;
  -webkit-transition: 0.3s max-height;
  transition: 0.3s max-height;
}
.input-radio input[type="radio"]:checked~.caption, .input-checkbox input[type="checkbox"]:checked~.caption {
  max-height: 800px;
}
.checkbox-filter .input-radio label, .checkbox-filter .input-checkbox label {
  font-size: 12px;
}
.checkbox-filter .input-radio label small, .checkbox-filter .input-checkbox label small {
  color: #8D99AE;
}

</style>