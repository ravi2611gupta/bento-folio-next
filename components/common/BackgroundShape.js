import React from 'react'

const BackgroundShape = () => {
  return (
    <div>
        <div className="fixed -top-[20%] -left-[20%] -z-[1] common-shape">
          <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1"/>
        </div>
        <div className="fixed -bottom-[20%] -right-[20%] -z-[1] common-shape">
          <img src="assets/img/bg/banner-shape-1.png" alt="banner-shape-1"/>
        </div>
        <div className="fixed top-[20%] left-[10%] -z-[1] move-with-cursor" data-value="1">
          <img src="assets/img/bg/object-3d-1.png" alt="object-3d-1"/>
        </div>
        <div className="fixed -bottom-[20%] -right-[9%] -z-[1] move-with-cursor" data-value="1">
          <img src="assets/img/bg/object-3d-2.png" alt="object-3d-2"/>
        </div>
      </div>
  )
}

export default BackgroundShape