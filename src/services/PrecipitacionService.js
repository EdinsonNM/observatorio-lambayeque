let PRECIPITACIONES = [{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-01","GRUP_PARAM":"PT","PARAM":"101","VALOR":"25.9"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-02","GRUP_PARAM":"PT","PARAM":"101","VALOR":"2.2"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-03","GRUP_PARAM":"PT","PARAM":"101","VALOR":".4"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-04","GRUP_PARAM":"PT","PARAM":"101","VALOR":"10.5"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-05","GRUP_PARAM":"PT","PARAM":"101","VALOR":"18.1"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-06","GRUP_PARAM":"PT","PARAM":"101","VALOR":"0"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-07","GRUP_PARAM":"PT","PARAM":"101","VALOR":null},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-08","GRUP_PARAM":"PT","PARAM":"101","VALOR":"2.6"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-09","GRUP_PARAM":"PT","PARAM":"101","VALOR":"10"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-10","GRUP_PARAM":"PT","PARAM":"101","VALOR":"23.8"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-11","GRUP_PARAM":"PT","PARAM":"101","VALOR":"4.2"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-12","GRUP_PARAM":"PT","PARAM":"101","VALOR":"13.6"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-13","GRUP_PARAM":"PT","PARAM":"101","VALOR":".4"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-14","GRUP_PARAM":"PT","PARAM":"101","VALOR":"0"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-15","GRUP_PARAM":"PT","PARAM":"101","VALOR":"0"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-16","GRUP_PARAM":"PT","PARAM":"101","VALOR":"0"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-17","GRUP_PARAM":"PT","PARAM":"101","VALOR":"0"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-18","GRUP_PARAM":"PT","PARAM":"101","VALOR":"0"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-19","GRUP_PARAM":"PT","PARAM":"101","VALOR":".3"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-20","GRUP_PARAM":"PT","PARAM":"101","VALOR":"18.1"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-21","GRUP_PARAM":"PT","PARAM":"101","VALOR":".8"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-22","GRUP_PARAM":"PT","PARAM":"101","VALOR":null},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-23","GRUP_PARAM":"PT","PARAM":"101","VALOR":"0"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-24","GRUP_PARAM":"PT","PARAM":"101","VALOR":"0"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-25","GRUP_PARAM":"PT","PARAM":"101","VALOR":".6"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-26","GRUP_PARAM":"PT","PARAM":"101","VALOR":"6.9"},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-27","GRUP_PARAM":"PT","PARAM":"101","VALOR":null},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-28","GRUP_PARAM":"PT","PARAM":"101","VALOR":null},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-29","GRUP_PARAM":"PT","PARAM":"101","VALOR":null},{"C_COD_ESTA":"00107002","D_FEC_PARA":"2017-04-30","GRUP_PARAM":"PT","PARAM":"101","VALOR":null}];

import _ from 'underscore';

export default class PrecipitacionService{

    static getAll (params) {
        let data =_.where(PRECIPITACIONES, params) ;
        return data;
    }

}
