import React from 'react'
import "../footer.css"
export default function TheFooter() {
  return (
    <div className='footer'>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">FindEMP.netlify.app is a Responsive digital recruitment solution app aimed at providing a seamless hiring experience for multiple MNCs.

</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="#">Developers</a></li>
              <li><a href="#">Product Managers</a></li>
              <li><a href="#">HR recruiters</a></li>
              <li><a href="#">Managers</a></li>
              <li><a href="#">Designers</a></li>
              <li><a href="#">Sales</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Contribute</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">  FindEMP</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><img className='social-handles' src='./images/facebook.svg'/></a></li>
              <li><a class="twitter" href="#"><img className='social-handles' src='./images/twitter.svg'/></a></li>
              <li><a class="insta" href="#"><img className='social-handles' src='./images/instagram.svg'/></a></li>
              <li><a class="linkedin" href="#"><img className='social-handles' src='./images/linkedin.svg'/></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}
