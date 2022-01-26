import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addKontak, getListKontak } from "../../actions/KontakAction";

export default function AddKontak() {
  const [nama, setNama] = useState("");
  const [noHp, setNoHp] = useState("");

  const { addKontakResult } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("1. Masuk handle submit");

    dispatch(addKontak({ nama: nama, noHp: noHp }));
  };

  useEffect(() => {
    if (addKontakResult) {
      console.log("5. Masuk component did update");
      dispatch(getListKontak());
      setNama("");
      setNoHp("");
    }
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h4>Add kontak</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nama" placeholder="Nama ..." value={nama} onChange={(e) => setNama(e.target.value)} />
        <input type="number" name="noHp" placeholder="noHp ..." value={noHp} onChange={(e) => setNoHp(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
