import img1 from '../../assets/LinkedIn-Background-Photo-47-1.webp'
import avater from '../../assets/profile_6.webp'
const UserInfoPage = () => {
  return (

<>
  {/* component */}
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />
  <main className=" min-h-full">
    <section className="relative block  h-96">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover overflow-hidden"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-50 bg-black"
        />
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style={{ transform: "translateZ(0px)" }}
      >
    
      </div>
    </section>
    <section className="relative py-10">
      <div className="container mx-auto px-4">
        <div className="relative min-h-fit flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-36">
          <div className="px-6 flex flex-col gap-y-32">
                <div className="relative flex justify-center items-center">
                  <img
                    alt="..."
                    src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-20 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
            
            <div className="text-center ">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                Jenna Stones
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                Los Angeles, California
              </div>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                Los Angeles, California
              </div>
             
           
            </div>
           
          </div>
        </div>
      </div>
     
    </section>
  </main>
</>

  
  )
}

export default UserInfoPage