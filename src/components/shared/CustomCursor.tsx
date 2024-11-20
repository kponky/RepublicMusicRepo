import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

export type CustomCursorRef = {
  setHovering: (state: boolean) => void;
};

const CustomCursor = forwardRef<CustomCursorRef>((_, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useImperativeHandle(ref, () => ({
    setHovering,
  }));

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const { x, y } = mousePosition;

  return (
    <div
      className={`video-cursor ${hovering ? "hover" : ""}`}
      style={{
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <div className="video-inner"></div>
    </div>
  );
});

CustomCursor.displayName = "CustomCursor";

export default CustomCursor;
