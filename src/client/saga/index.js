import { put, takeLatest, all } from 'redux-saga/effects';
import { GET_DEPARTMENT, GET_CATEGORY, GET_VENDOR, GET_YEAR, FILTER_DATA_RECEIVED} from '../dictionary'

function* fetchDepartment() {
	
  	//const json = yield fetch('http://10.138.80.28:55002/mx-cogs-kpi-service/v1/filters/departments')
    //    .then(response => response.json(), );    

    const departments = [{"deptNbr":23,"deptDesc":"MODA HOMEN"},
			{"deptNbr":53,"deptDesc":"TARJ/LIBROS/REV SUBDIV:DPT03  "},
			{"deptNbr":91,"deptDesc":"TROCA DE OLIO"},
			{"deptNbr":55,"deptDesc":"VIDEOS SUBDIV:DPT05           "},
			{"deptNbr":33,"deptDesc":"NINAS                         "},
			{"deptNbr":132,"deptDesc":"PAPELERIA                     "},

			{"deptNbr":185,"deptDesc":"COMISION SUVA                 "},
			{"deptNbr":5,"deptDesc":"ELETRONICA                    "},
			{"deptNbr":28,"deptDesc":"NYLONS                        "}
			];
  	yield put({ type: FILTER_DATA_RECEIVED, context: 'dept', data: departments });
}

function* fetchYear() {
  	//const json = yield fetch('http://172.19.163.110:55002/mx-cogs-kpi-service/v1/filters/years')
      //  .then(response => response.json(), );    
      const year = [{"yearNbr": "LLY", "yearDesc":2016},{"yearNbr":"LY", "yearDesc":2017},{"yearNbr":"YTD","yearDesc":2018}];

  	yield put({ type: FILTER_DATA_RECEIVED, context: 'year', data: year });
}

function* fetchCategory(action) {
	//const url = `http://172.19.163.110:55002/mx-cogs-kpi-service/v1/filters/categories/${action.id}`
  	//const category = yield fetch(url)
      //  .then(response => response.json(), );    
      const category = [{"deptNbr":23,"catNbr":33,"catDesc":"category_MODA HOMEN"},
      {"deptNbr":23,"catNbr":101,"catDesc":"category_TROCA DE OLIO                 "}];

  	yield put({ type: FILTER_DATA_RECEIVED, context: 'cat', data: category });
}

function* fetchVendor() {
  	//const json = yield fetch('http://172.19.163.110:55002/mx-cogs-kpi-service/v1/filters/suppliers')
      //  .then(response => response.json(), );    
      const vendor = [{"vendorNbr":23,"vendorDesc":"VISION COMERCIAL DEPORT SA CV"},{"vendorNbr":53,"vendorDesc":"SIVIA ITECH SA DE CV"},{"vendorNbr":55,"vendorDesc":"JM DISTRIBUIDORES SA CV"},{"vendorNbr":33,"vendorDesc":"TRUENO CORPORACION SA DE CV"},{"vendorNbr":5,"vendorDesc":"VILLARREAL MOLINA MYRNA L"},{"vendorNbr":28,"vendorDesc":"VF DILTEX S RL CV"},{"vendorNbr":50,"vendorDesc":"SEI MEXICO SA DE CV"},{"vendorNbr":95,"vendorDesc":"ZUCRUM INTERNACIONAL SA CV"},{"vendorNbr":82,"vendorDesc":"UNILEVER DE MEXICO S RL CV"}];

  	yield put({ type: FILTER_DATA_RECEIVED, context: 'vendor', data: vendor });
}

function* actionWatcher() {
     yield takeLatest(GET_DEPARTMENT, fetchDepartment)
     yield takeLatest(GET_CATEGORY, fetchCategory)
     yield takeLatest(GET_VENDOR, fetchVendor)
     yield takeLatest(GET_YEAR, fetchYear)
}

export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}