import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/8a133452-55d9-4f68-bf5b-90a8a3e1d436-six5dv.webp",
  "https://utfs.io/f/80aa675e-466b-4571-8847-8035d98e02fe-qno2tt.jpg",
  "https://utfs.io/f/281f4adf-152c-4b66-9569-868a7e1b4bfa-4hou2r.jpg",
];

const mockImages = mockUrls.map(((url, index) => ({
  id: index+1,
  url,
})))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        [...mockImages,...mockImages,...mockImages,...mockImages,...mockImages,].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))
      }</div>
       Hello gallery in process 
      
    </main>
  );
}
