import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Search(prop) {
  const [search, setSearch] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    useHistory.push(`/detail`);
  };

  return <div>search test</div>;
}
