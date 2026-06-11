export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-xl w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-green-800">{title}</h2>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
}
