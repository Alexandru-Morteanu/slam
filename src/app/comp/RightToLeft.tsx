type Props = {
  isOpen: boolean;
  setIsOpen: Function;
};
export default function RightToLeftPopup({ isOpen, setIsOpen }: Props) {
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            onClick={togglePopup}
            className="text-gray-500 hover:text-gray-800 mb-4"
          >
            Close
          </button>
          <h2 className="text-xl font-bold mb-2">Popup Content</h2>
          <p>This is a sample popup sliding in from the right.</p>
        </div>
      </div>
    </div>
  );
}
