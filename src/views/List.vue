<template>
  categoria filtrada: {{ $route.params.category }}
  <div class="section">
    <div class="container">
      <div class="row">
        <div id="aside" class="col-md-3">
          <div class="aside">
            <h3 class="aside-title">Categories</h3>
            <div class="checkbox-filter" v-for="category in categories" :key="category.id">
              <FilterCategory :category="category"/>
            </div>

            <div class="aside">
							<h3 class="aside-title">Price</h3>
							<div class="price-filter">
								<div id="price-slider"></div>
								<div class="input-number price-min">
									<input id="price-min" type="number">
									<span class="qty-up">+</span>
									<span class="qty-down">-</span>
								</div>
								<span>-</span>
								<div class="input-number price-max">
									<input id="price-max" type="number">
									<span class="qty-up">+</span>
									<span class="qty-down">-</span>
								</div>
							</div>
						</div>

            <div class="checkbox-filter" v-for="brand in brands" :key="brand.id">
              <FilterBrand :brand="brand"/>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterCategory from '../components/filters/FilterCategory.vue'
import FilterBrand from '../components/filters/FilterBrand.vue'
import { logar } from '../services/getToken'
import { getCategory } from '../services/getCategory'
import { getProducts } from '../services/getProduct'

export default{
  data() {
    return {
      categories: [],
      brands: [],
    }
  },
  components: {
    FilterCategory,
    FilterBrand
  },
  mounted() {
    logar().then( res => {
      
      this.getCategory(res)

    }).catch(res => {
      console.log(res)
      alert('error')
    })
  },
  methods: {
    async getCategory(token){
      await getCategory(token).then( res => {
        this.categories = res
      } )
    },
  },
}
</script>

<style>
/*=========================================================
	07 -> PRODUCTS PAGE
===========================================================*/

/*----------------------------*\
	Aside
\*----------------------------*/

.aside+.aside {
  margin-top: 30px;
}

.aside>.aside-title {
  text-transform: uppercase;
  font-size: 18px;
  margin: 15px 0px 30px;
}

/*-- checkbox Filter --*/

.checkbox-filter>div+div {
  margin-top: 10px;
}

.checkbox-filter .input-radio label, .checkbox-filter .input-checkbox label {
  font-size: 12px;
}

.checkbox-filter .input-radio label small, .checkbox-filter .input-checkbox label small {
  color: #8D99AE;
}

/*-- Price Filter --*/

#price-slider {
  margin-bottom: 15px;
}

.noUi-target {
  background-color: #FFF;
  -webkit-box-shadow: none;
  box-shadow: none;
  border: 1px solid #E4E7ED;
  border-radius: 0px;
}

.noUi-connect {
  background-color: #D10024;
}

.noUi-horizontal {
  height: 6px;
}

.noUi-horizontal .noUi-handle {
  width: 12px;
  height: 12px;
  left: -6px;
  top: -4px;
  border: none;
  background: #D10024;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 50%;
}

.noUi-handle:before, .noUi-handle:after {
  display: none;
}

.price-filter .input-number {
  display: inline-block;
  width: calc(50% - 7px);
}

/*----------------------------*\
	Store
\*----------------------------*/

.store-filter {
  margin-bottom: 15px;
  margin-top: 15px;
}

/*-- Store Sort --*/

.store-sort {
  display: inline-block;
}

.store-sort label {
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  margin-right: 15px;
}

/*-- Store Grid --*/

.store-grid {
  float: right;
}

.store-grid li {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background-color: #FFF;
  border: 1px solid #E4E7ED;
  text-align: center;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.store-grid li+li {
  margin-left: 5px;
}

.store-grid li:hover {
  background-color: #E4E7ED;
  color: #D10024;
}

.store-grid li.active {
  background-color: #D10024;
  border-color: #D10024;
  color: #FFF;
  cursor: default;
}

.store-grid li a {
  display: block;
}

/*-- Store Pagination --*/

.store-pagination {
  float: right;
}

.store-pagination li {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #FFF;
  border: 1px solid #E4E7ED;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
}

.store-pagination li+li {
  margin-left: 5px;
}

.store-pagination li:hover {
  background-color: #E4E7ED;
  color: #D10024;
}

.store-pagination li.active {
  background-color: #D10024;
  border-color: #D10024;
  color: #FFF;
  font-weight: 500;
  cursor: default;
}

.store-pagination li a {
  display: block;
}

.store-qty {
  margin-right: 30px;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 12px;
}

</style>