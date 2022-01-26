import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getListKontak, deleteKontak, detailKontak } from "../../actions/KontakAction";

export default function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    //get list contacts
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak, i) => {
          return (
            <p key={i}>
              {kontak.nama} - {kontak.noHp} - <button onClick={() => dispatch(deleteKontak(kontak.id))}>Hapus</button> - <button onClick={() => dispatch(detailKontak(kontak))}>Edit</button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading . . .</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}
