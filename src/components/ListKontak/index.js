import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getListKontak } from "../../actions/KontakAction";

export default function ListKontak() {
  const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.KontakReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("1. useEffect component did mount");
    //get list contacts
    dispatch(getListKontak());
  }, [dispatch]);
  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak, i) => {
          return (
            <p key={i}>
              {kontak.nama} - {kontak.noHp}
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
