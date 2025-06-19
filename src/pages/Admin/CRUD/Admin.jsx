import HeaderAdmin from "../../../components/Admin/HeaderAdmin";

export default function admin() {
  return (
    
    <div className="guest-page">
      <HeaderAdmin/>
      <section id="" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-25 animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
      </section>
      
    </div>
  );
}
