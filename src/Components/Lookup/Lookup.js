import React, { useState } from "react";
import { data } from "./dummy.json";
import ItemPage from "./ItemPage/ItemPage";
import LookupItem from "./LookupItem/LookupItem";
import Search from "./Search/Search";
import { LookupWrapper, LookupContainer } from "./Styled";

const Lookup = () => {
  const [page, setPage] = useState(1);
  const LookupItemList = data
    .filter((item) => item.id <= page * 5 && item.id > (page - 1) * 5)
    .map((item) => <LookupItem itemInfo={item} />);
  return (
    <LookupWrapper>
      <LookupContainer>
        <Search/>
        <div>번호 | 카테고리 | 품명 | 수량</div>
        {LookupItemList}
        <ItemPage id={page} setId={setPage} length={data.length} />
      </LookupContainer>
    </LookupWrapper>
  );
};

export default Lookup;
