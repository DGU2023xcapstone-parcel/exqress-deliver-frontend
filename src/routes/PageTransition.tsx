import { ReactNode } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./PageTransitionStyles.css";

interface RouteTransitionProps {
  path: string;
  children: ReactNode;
}
const RouteTransition = ({ path, children }: RouteTransitionProps) => {
  return (
    <TransitionGroup className={"transition-wrapper"}>
      <CSSTransition key={path} timeout={300} classNames={"navigate-push"}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteTransition;
