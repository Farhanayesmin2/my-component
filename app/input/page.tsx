import { title } from "@/components/primitives";

export default function InputPage() {
  return (
    <>
  {/* This section is create for upload input */}
  <section className="container mx-auto">
      <div className="flex flex-col items-center justify-center py-4 m-24 border-[#3db78a] border-2 border-dashed hover:border-dotted">
        <p className="text-2xl text-center text-gray-700 font-bold">Upload</p>
        <label className="flex flex-col items-center bg-white rounded-lg tracking-wide uppercase cursor-pointer hover:text-white ease-linear transition-all duration-150">
          <Player
            autoplay
            loop
            src={uploadIcon}
            style={{ height: '200px', width: '200px' }}
          >
            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
          </Player>
          <input type="file" className="hidden" onChange={handleFileAdd} multiple />
        </label>
        <p className="mt-4 text-center text-gray-700">
          Drag and Drop or <span className="text-[#3db78a]">Choose file</span> to upload <br />
          PDF, DOCX, DOC, PPTX or PPT
        </p>
        </div>
      </section>
      <h3>Here is a input page</h3>
    </>
  );
}
