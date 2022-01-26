import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";

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

export const deleteKontak = (id) => {
  console.log("1. Masuk action");
  return (dispatch) => {
    //loading
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // delete API
    axios({
      method: "DELETE",
      url: "http://localhost:5000/contacts/" + id,
      timeout: 120000,
    })
      .then((response) => {
        //success
        console.log("2. Berhasil dapat data: ", response.data);
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((err) => {
        //failed
        console.log("2. Gagal dapat data: ", err.message);
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
