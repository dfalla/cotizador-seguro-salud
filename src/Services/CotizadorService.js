
import axios from 'axios';

const cotizadorService = {

    async obtenerdatospersona(filter) {

        const baseApi = "https://freestyle.getsandbox.com/dummy/obtenerdatospersona";

        const { data } = await axios.post(`${baseApi}`)
        
        return data.data.tercero == null ? [] : data.data.tercero;
    }
}

export default cotizadorService;