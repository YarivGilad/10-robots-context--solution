//wrapping the routes relevant to the robots state
import { useState, useEffect, createContext, useContext, ReactNode } from "react";
import * as roboApi from "../api/robots.api.ts";
import { Robot } from "../types.ts";

interface RoboStoreType {
    robotsList: Robot[];
    selectedRobot: Robot | undefined;
    isLoadingRobot: boolean;
    errorMsg: string;
    setRobotsList: (robotsList: Robot[]) => void;
    setSelectedRobot: (robot: Robot) => void;
}

const RoboStore = createContext<RoboStoreType | null>(null);

const { Provider } = RoboStore;


const useRobots = () => {
  const context = useContext(RoboStore);
  if (!context) {
    throw new Error(`useRobots must be used within a RoboProvider`);
  }
  return context;
};

interface RoboProviderProps {
  children?: ReactNode;
}

const RoboProvider = ({ children }: RoboProviderProps) => {
  const [robotsList, setRobotsList] = useState<Robot[]>([]);
  const [selectedRobot, setSelectedRobot] = useState<Robot>();
  const [isLoadingRobot, setIsLoadingRobot] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      const result = await roboApi.getRobotsList();
      setRobotsList(result);
      setSelectedRobot(result[0]);
      setIsLoadingRobot(false);
    })().catch((error: unknown) => setErrorMsg(`fetch operation failed: ${(error as Error).message}`));
  }, []);

  // state === values to display
  const state = {
    robotsList,
    selectedRobot,
    isLoadingRobot,
    errorMsg
  };
  // actions === callbacks to call
  const actions = {
    setRobotsList,
    setSelectedRobot
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
};

export { RoboProvider, useRobots };
