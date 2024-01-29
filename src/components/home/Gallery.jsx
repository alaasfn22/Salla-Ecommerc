import juice from '../../assets/1200w-edG6BdzZS1U.webp'
import juice3 from '../../assets/hero-img.png'
import juice2 from '../../assets/juice2.png'
const Gallery = () => {
 
  return (
    <div className="" >
    <section  className=" shadow-md dark:bg-gray-800 bg-opacity-90 py-6">
  <div className="container h-[450px]  mx-auto px-4 flex flex-col lg:flex-row ">
    {/* left */}
    <div  className="lg:w-2/3 bg-main-Color-2 rounded-xl overflow-hidden ">
     <img src={juice3} alt='' className='w-full h-full object-contain'/>
    </div>
    {/* right */}
    <div  className="juice2 mt-6 bg-main-Color-2 overflow-hidden rtl:mr-6 lg:mt-0 lg:ml-6 lg:w-1/3 rounded-xl bg-primary-lite ">
      <img src={juice} alt='' className='h-full w-full object-cover object-center'/>
      
    </div>
  </div>
</section>

    </div>
  );
};

export default Gallery;
