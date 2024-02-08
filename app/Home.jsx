import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="section-one">
        <div className="container">
          <div className="row">
            <div className="col py-5">
              <p className="section-one-title">New York is top!</p>
              <p className="section-one-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo sequi facilis perferendis ea quibusdam iste eum quasi odit corporis. Suscipit in laudantium corrupti? Hic, culpa voluptate velit nulla enim dolores.
                Dolor perspiciatis deserunt cupiditate tempora deleniti, odit repudiandae accusamus optio in quidem officiis soluta ullam placeat maiores. Iure libero cupiditate at molestias eum recusandae laboriosam inventore, molestiae culpa, enim eius.
                Saepe eum corporis, voluptatum a quae cum laborum ipsum debitis tenetur inventore enim maiores delectus quidem non earum molestias quo quasi quas odit quos. Esse hic dolorum maxime sequi optio!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="container">
          <div className="row col py-5 text-center">
            <h4 className="mb-5">Find the main points of interent of the city</h4>
            <div className="text-center">
              <Link href="/points" className="btn btn-outline-light py-3 px-5"><h4 className="mb-0">Points of interest</h4></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-three">
        <div className="container">
          <div className="row col py-5 text-center">
            <h4 className="mb-3">Consult the interactive map</h4>
            <p className="py-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt cupiditate ex distinctio consequatur sapiente ipsa tempora voluptatem, ipsum magnam nam provident delectus atque facere magni nihil? Hic dolore at voluptas.
              Accusantium cum in nam nostrum at illo iure iusto modi accusamus voluptatibus reprehenderit voluptatem quis esse magni possimus tempora ex repudiandae, velit expedita sapiente maiores non. Necessitatibus, blanditiis quos? Sequi!
            </p>
            <div className="text-center">
              <Link href="/map" className="btn btn-outline-dark py-3 px-5"><h4 className="mb-0">Consult the map</h4></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}