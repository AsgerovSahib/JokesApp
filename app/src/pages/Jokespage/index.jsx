import React, { useEffect, useState } from "react";
import Jokescontent from "../../components/JokesContent";
import { getJokers } from "../../services";

const JokesPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const res = await getJokers();

    const newData = res.data.results.map((item) => ({ ...item, vote: 0 }));
    setData(newData);
  };
  console.log("data", data);

  const onHandleRemoveVote = (i) => {
    let newData = [...data];
    newData[i] = {
      ...newData[i],
      vote: newData[i].vote - 1,
    };
    newData.sort((itemA, itemZ) => itemZ.vote - itemA.vote);

    setData(newData);
    console.log("i", newData[i]);
  };

  const onHandleAddVote = (i) => {
    let newData = [...data];
    newData[i] = {
      ...newData[i],
      vote: newData[i].vote + 1,
    };
    newData.sort((itemA, itemZ) => itemZ.vote - itemA.vote);
    setData(newData);
    console.log("i", newData[i]);
  };

  return (
    <div>
      JokesPag
      <Jokescontent
        data={data}
        onAzalt={onHandleRemoveVote}
        onArtir={onHandleAddVote}
      />
    </div>
  );
};

export default JokesPage;
