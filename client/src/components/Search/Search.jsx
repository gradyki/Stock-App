import "./Search.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Search(prop) {
  const [search, setSearch] = useState("");
  const history = useHistory();

  return <div>search test</div>;
}
