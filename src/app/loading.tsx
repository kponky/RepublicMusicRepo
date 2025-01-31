export default function Loading() {
  return (
    <div className="w-full h-dvh bg-black relative">
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="relative h-32 w-32">
          <div className="circle one"></div>
          <div className="circle two"></div>
          <div className="circle three"></div>
        </div>
      </div>
    </div>
  );
}
