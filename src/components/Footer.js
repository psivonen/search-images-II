export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-100 fixed bottom-0 w-full p-3">
      <p className="text-center text-slate-500 text-xs lg:text-sm">
        &copy; {currentYear} Search Images. Photos from{" "}
        <a
          href="https://unsplash.com/?utm_source=Search_images&utm_medium=referral"
          className="text-slate-600 hover:text-slate-900 transition-all duration-300"
        >
          Unsplash
        </a>
        , using Unsplash API.
      </p>
    </div>
  );
}
