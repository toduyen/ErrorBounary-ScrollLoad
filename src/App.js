import React from "react";
import UseFetchingData from "./FetchingData/FetchingDataVocalist";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import "./App.css";
function App() {
  const [{ Data, isLoading, isError }, setUrl] = UseFetchingData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const Row = ({ data, index, style }) => (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      {`${index} - ${data[index].body}`}
    </div>
  );
  return (
    <React.Fragment>
      <div style={{ height: "400px" }}>
        {isError ? (
          "error"
        ) : isLoading ? (
          "Loading..."
        ) : (
          <AutoSizer>
            {({ height, width }) => (
              <List
                className="List"
                height={height}
                itemCount={Data?.length}
                itemSize={35}
                itemData={Data}
                width={width}
              >
                {Row}
              </List>
            )}
          </AutoSizer>
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
