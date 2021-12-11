import React from 'react'

function Offline() {
    document.title=`You Are Offline`;
    return (
        <div>
            <main id="main">

{/* breadcrumb */}
<section id="breadcrumbs" className="breadcrumbs">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center">
      <h2>Offline</h2>
    </div>

  </div>
</section>
<section id="offline" className="offline">
      <div className='text-center mt-5'><h2>You are offline!</h2></div>
    </section>
</main>
        </div>
    )
}

export default Offline
