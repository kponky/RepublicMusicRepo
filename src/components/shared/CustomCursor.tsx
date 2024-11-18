import React, {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

type IPosition = {
  x: number;
  y: number;
};

export type CustomCursorRef = {
  setHovering: (state: boolean) => void;
};

const CustomCursor = forwardRef<CustomCursorRef>((_, ref) => {
  const [position, setPosition] = useState<IPosition>({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useImperativeHandle(ref, () => ({
    setHovering,
  }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`video-cursor ${hovering ? "hover" : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="video-inner"></div>
    </div>
  );
});

CustomCursor.displayName = "CustomCursor";

export default CustomCursor;
