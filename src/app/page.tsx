import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { PiArrowsDownUpThin } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";



const dumyData = [
  {
    label: "das Aufsehen",
    description: "sensation, furore, attention",
    tag: ['B2', 'Noun']
  },
  {
    label: "der Tisch",
    description: "table; meal",
    tag: ['A1', 'Noun']
  },
  {
    label: "verwenden",
    description: "to use; to make expenses applied on a material object; to intercede; to turn away",
    tag: ['B1', 'Verb']
  },
  {
    label: "der Tisch",
    description: "table; meal",
    tag: ['A1', 'Noun']
  },
  {
    label: "verwenden",
    description: "to use; to make expenses applied on a material object; to intercede; to turn away",
    tag: ['B1', 'Verb']
  },
  {
    label: "der Tisch",
    description: "table; meal",
    tag: ['A1', 'Noun']
  },
  {
    label: "verwenden",
    description: "to use; to make expenses applied on a material object; to intercede; to turn away",
    tag: ['B1', 'Verb']
  },
]

const listNumber = [
  {
    number: 1,
    color: 'boxOrange'
  },
  {
    number: 1,
    color: 'boxOrange'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 1,
    color: 'boxOrange'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 1,
    color: 'boxOrange'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 0,
    color: 'boxGrey'
  },
  {
    number: 10,
    color: 'boxGreen'
  },

]


export default function Home() {
  return (
    <main className="w-full max-w-sm  mx-auto min-h-screen flex flex-col md:max-w-full">

      {/* Navbar */}
      <div className=" bg-dark text-white uppercase items-center p-3  text-center     ">
        <div className="w-full flex gap-2  text-xs lg:max-w-5xl  mx-auto relative lg:text-lg lg:gap-4  divide-x ">
          <p className="px-1 md:px-4 cursor-pointer">Home</p>
          <p className="px-1 md:px-4 cursor-pointer">Videos</p>
          <p className="underline underline-offset-[5px] lg:underline-offset-8 px-1 md:px-4 cursor-pointer "> Vocabulary</p>
          <p className="px-1 md:px-4 cursor-pointer ">flashcards</p>
          <RxHamburgerMenu className="text-2xl absolute right-2 cursor-pointer border-none" />
        </div>
      </div>

      {/* End Navbar */}

      {/* content */}
      <div className="flex  flex-1 flex-col gap-5 mb-10  mx-auto  w-full lg:max-w-4xl">



        <div className="flex flex-col lg:flex-row  items-center w-full  gap-10 mt-10">


          {/* Icon Plus */}
          <div className="">
            <FiPlus size={70} color="white" className="bg-green rounded-full" />
          </div>


          <div className="flex-1 space-y-2 hidden lg:block">
            <h4 className=" text-3xl">Words added in the last 2 weeks</h4>
            <div className="flex w-full text-xs font-semibold gap-2">
              {
                listNumber.map((item, index) => (
                  <span className={`border bg-${item.color} w-6 h-6 flex items-center justify-center`} key={index}> {item.number} </span>
                ))
              }
            </div>
          </div>


          {/* Total Words */}
          <div className="flex flex-row items-center text-3xl font-medium text-black gap-3 lg:text-dark  md:flex-col ">
            <h3 className="lg:font-normal">Total words </h3>
            <h3 className="lg:text-5xl lg:font-bold">75</h3>
          </div>


        </div>


        {/* Flex Input and Sort */}
        <div className="flex flex-col lg:flex-row w-full gap-5">


          {/* INPUT */}
          <div className="w-full  px-8 relative flex  lg:px-0">
            <input type="text" name="" id="" placeholder="Enter a word or translation" className="border w-full p-1 pl-10 pr-1 text-md" />
            <CiSearch className="absolute top-1/2  -translate-y-1/2 left-9 lg:left-2" size={30} />
            <div className="bg-grey w-14 border flex justify-center items-center cursor-pointer">
              <p>de</p>
            </div>
          </div>


          {/* SORT */}
          <div className="flex justify-center items-center text-xl gap-5  min-w-[200px]">
            <h4 className="lg:text-sm">Newest first</h4>
            <PiArrowsDownUpThin size={40} />
          </div>

        </div>




        {/* LIST */}
        <div className="gap-10">

          {dumyData.map((data, index) => (
            <div key={index} className={`w-full flex bg ${index % 2 === 0 ? 'bg-olive' : 'bg-white'}  px-5 py-3 justify-between `}>
              <div className=" w-2/3">
                <h3 className="font-bold">{data.label}</h3>
                <p className="text-sm">{data.description}</p>
              </div>
              <div className=" w-1/3 flex  gap-2  justify-end">

                {data.tag.map((tag, index) => (
                  <p className="border  rounded-full h-fit text-xs px-2 font-medium border-black" key={index}>{tag}</p>
                ))}
              </div>

            </div>
          ))}


        </div>

      </div>

      {/* End content */}


      {/* Footer */}
      <div className="w-full flex justify-center items-center gap-8 p-3 bg-grey text-sm font-semibold text-textDark ">
        <p>About</p>
        <p>Teams</p>
        <p>Privacy</p>
        <p>Contact us</p>
      </div>
      {/* End Footer */}

    </main >
  );
}
