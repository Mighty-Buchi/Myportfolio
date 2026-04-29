const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full py-6 border-t border-white/10 mt-8">
      <p className="text-center text-sm text-gray-400">
        &copy; {currentYear} <span className="text-blue-600 font-semibold">DEVV-EL</span>. 
        All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;