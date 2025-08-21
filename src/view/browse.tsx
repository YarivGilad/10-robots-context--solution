import styled from "styled-components";
import { List } from "./list.tsx";

import { Filter } from "./filter.tsx";
import { Profile } from "./profile.tsx";

import { useRobots } from "../state/robots.store";


export function Browse() {
  const { isLoadingRobot, errorMsg } = useRobots();

  // const [robotsList, setRobotsList] = useState<Robot[]>([]);
  // const [selectedProfile, setSelectedProfile] = useState<Robot>();
  // const [isLoading, setIsLoading] = useState(true);
  // const [errorMsg, setErrorMsg] = useState("");

  // useEffect(() => {
  //   (async () => {
  //     const result = await getRobotsList();
  //     setRobotsList(result);
  //     setSelectedProfile(result[0]);
  //     setIsLoading(false);
  //   })().catch((error: unknown) => setErrorMsg(`fetch operation failed: ${(error as Error).message}`));
  // }, []);

  return (
    <Div>
      {errorMsg ? (
        <h1 className="error-msg">{errorMsg}</h1>
      ) : isLoadingRobot ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <Filter />
          <div className="content-box">
            <Profile />
            <List />
          </div>
        </>
      )}
    </Div>
  );
}

const Div = styled.div`
  background: Cornsilk;
  padding: 10.5rem 1.5rem 1.5rem;
  border-radius: 0.4rem;
  box-shadow: 0 0.4rem 1.5rem DimGrey;
  position: relative;
  min-width: 60rem;
  min-height: 45rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.content-box {
    display: flex;
  }

  h1.loading, h1.error-msg{
    font-size: 5rem;
    font-weight: normal;
    font-family: "Griffy", cursive;
    text-align: center;
    color: darkslateblue;
    margin-top: -10rem;
  }

  h1.error-msg{
    font-family: "Expletus Sans";
  }
`;

