<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div id="aside" class="col-md-3">

          <div class="aside">
            <h3 class="aside-title">Categories</h3>
            <div class="checkbox-filter" v-for="category in categories" :key="category.id">
              <FilterCategory :category="category" :selected="$route.params.category"/>
            </div>
          </div>
          
        </div>

        <div id="store" class="col-md-9">
          <div class="store-filter clearfix">
            <div class="store-sort">
              <label>
                Ordenar:
                <select class="input-select">
                  <option value="">Escolha</option>
                  <option value="0">Preço Crescente</option>
                  <option value="1">Preço Decrescente</option>
                  <option value="2">Promoções</option>
                </select>
              </label>
            </div>
            
            <ul class="store-grid">
              <li class="active">
                <font-awesome-icon class="" :icon="{ prefix: 'fas' , iconName:'th' }" />
              </li>
            </ul>
          </div>

          <div class="row">
            <NewProduct :products="products"/>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NewProduct from '../components/products/NewProducts.vue'
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
      products: [],      
    }
  },
  components: {
    FilterCategory,
    FilterBrand,
    NewProduct
  },
  mounted() {
    logar().then( res => {
      
      this.getCategory(res)
      this.getNewProductsHome(res)

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
    async getNewProductsHome(token){
      await getProducts(token).then( res => {
        this.products = res
      } )
    }
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
#aside {
  /* background-color: red; */
}

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

.noUi-base {
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1
}

.noUi-base,
.noUi-handle {
	-webkit-transform: translate3d(0, 0, 0);
	transform: translate3d(0, 0, 0)
}

.noUi-origin {
	position: absolute;
	height: 0;
	width: 0
}

.noUi-state-tap .noUi-connect,
.noUi-state-tap .noUi-origin {
	-webkit-transition: top .3s, right .3s, bottom .3s, left .3s;
	transition: top .3s, right .3s, bottom .3s, left .3s
}

.noUi-horizontal .noUi-handle {
	width: 34px;
	height: 28px;
	left: -17px;
	top: -6px
}

.noUi-vertical .noUi-handle {
	width: 28px;
	height: 34px;
	left: -6px;
	top: -17px
}

.noUi-handle {
	border: 1px solid #D9D9D9;
	border-radius: 3px;
	background: #FFF;
	cursor: default;
	box-shadow: inset 0 0 1px #FFF, inset 0 1px 7px #EBEBEB, 0 3px 6px -3px #BBB
}

.noUi-handle:after,
.noUi-handle:before {
	content: "";
	display: block;
	position: absolute;
	height: 14px;
	width: 1px;
	background: #E8E7E6;
	left: 14px;
	top: 6px
}

.noUi-vertical .noUi-handle:after,
.noUi-vertical .noUi-handle:before {
	width: 14px;
	height: 1px;
	left: 6px;
	top: 14px
}

.noUi-vertical .noUi-handle:after {
	top: 17px
}

[disabled] .noUi-handle,
[disabled].noUi-handle,
[disabled].noUi-target {
	cursor: not-allowed
}

.noUi-connect {
	position: absolute;
	right: 0;
	top: 0;
	left: 0;
	bottom: 0;
  background-color: #D10024;
}

.noUi-state-tap .noUi-connect,
.noUi-state-tap .noUi-origin {
	-webkit-transition: top .3s, right .3s, bottom .3s, left .3s;
	transition: top .3s, right .3s, bottom .3s, left .3s
}

.noUi-connect {
	background: #3FB8AF;
	border-radius: 4px;
	box-shadow: inset 0 0 3px rgba(51, 51, 51, .45);
	-webkit-transition: background 450ms;
	transition: background 450ms
}

[disabled] .noUi-connect {
	background: #B8B8B8
}

</style>