import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";

export const getListKontak = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // get API
    axios({
      method: "GET",
      url: "http://localhost:5000/contacts",
      timeout: 120000,
    })
      .then((response) => {
        //success
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        //failed
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  console.log("2. Masuk action");
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // add API
    axios({
      method: "POST",
      url: "http://localhost:5000/contacts",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        //success
        console.log("3. Berhasil tambah data: ", response.data);
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        //failed
        console.log("3. Gagal tambah data: ", err.message);
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
