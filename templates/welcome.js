require('dotenv').config();

const welcome = (content) => `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
   <title> Welcome Mail </title>
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <style type="text/css">
      #outlook a {
      padding: 0;
      }
      .ReadMsgBody {
      width: 100%;
      }
      .ExternalClass {
      width: 100%;
      }
      .ExternalClass * {
      line-height: 100%;
      }
      body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      }
      table,
      td {
      border-collapse: collapse;
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      }
      img {
      border: 0;
      height: auto;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
      }
      p {
      display: block;
      margin: 13px 0;
      }
   </style>
   <style type="text/css">
      @media only screen and (max-width:480px) {
      @-ms-viewport {
      width: 320px;
      }
      @viewport {
      width: 320px;
      }
      }
   </style>
   <style type="text/css">
      @media only screen and (min-width:480px) {
      .mj-column-per-100 {
      width: 100% !important;
      max-width: 100%;
      }
      .mj-column-per-50 {
      width: 50% !important;
      max-width: 50%;
      }
      }
   </style>
   <style type="text/css">
      @media only screen and (max-width:480px) {
      table.full-width-mobile {
      width: 100% !important;
      }
      td.full-width-mobile {
      width: auto !important;
      }
      }
   </style>
</head>
<body style="background-color:#E7E7E7;">
   <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Pre-header Text </div>
   <div style="background-color:#E7E7E7;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#040B4F;background-color:#040B4F;width:100%;">
         <tbody>
            <tr>
               <td>
                  <div style="Margin:0px auto;max-width:600px;">
                     <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
                        <tbody>
                           <tr>
                              <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;text-align:center;vertical-align:top;">
                                 <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                       <tbody>
                                          <tr>
                                             <td align="center" style="font-size:0px;padding:10px 25px;padding-top:30px;word-break:break-word;">
                                                <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:bold;letter-spacing:1px;line-height:24px;text-align:center;text-transform:uppercase;color:#ffffff;"><br> <span style="color: #979797; font-weight: normal"></span> </div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="center" style="font-size:0px;padding:10px 25px;padding-top:0;word-break:break-word;">
                                                <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:13px;font-weight:bold;letter-spacing:1px;line-height:20px;text-align:center;text-transform:uppercase;color:#17CBC4;"></div>
                                             </td>
                                          </tr>
                                          <tr>
                                             <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                                   <tbody>
                                                      <tr>
                                                         <td style="width:600px;"> <a href="javascript:void(0)" target="_blank">
                                                            <img alt="" height="auto" src="https://res.cloudinary.com/dheck1ubc/image/upload/v1544156968/Email/Images/AnnouncementOffset/header-top.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="600">
                                                            </a> 
                                                         </td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
      <div style="background:#1f2e78;background-color:#1f2e78;Margin:0px auto;max-width:600px;">
         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#1f2e78;background-color:#1f2e78;width:100%;">
            <tbody>
               <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;">
                     <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                           <tbody>
                              <tr>
                                 <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                       <tbody>
                                          <tr>
                                             <td style="width:600px;">
                                                <a href="javascript:void(0)" target="_blank">
                                                   <!-- <img alt="" height="auto" src="https://res.cloudinary.com/dheck1ubc/image/upload/v1544156968/Email/Images/AnnouncementOffset/header-bottom.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="600"> -->
                                                   <h1 style="text-align: center;color: #fff;">${process.env.PROJECT_NAME}</h1>
                                                </a>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="body-section" style="-webkit-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); -moz-box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); box-shadow: 1px 4px 11px 0px rgba(0, 0, 0, 0.15); Margin: 0px auto; max-width: 600px;">
         <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
            <tbody>
               <tr>
                  <td style="direction:ltr;font-size:0px;padding:20px 0;padding-bottom:0;padding-top:0;text-align:center;vertical-align:top;">
                     <div style="background:#ffffff;background-color:#ffffff;Margin:0px auto;max-width:600px;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;background-color:#ffffff;width:100%;">
                           <tbody>
                              <tr>
                                 <td style="direction:ltr;font-size:0px;padding:20px 0;padding-left:15px;padding-right:15px;text-align:center;vertical-align:top;">
                                    <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                                       <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                                          <tbody>
                                             <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                   <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:20px;font-weight:bold;line-height:24px;text-align:center;color:#212b35;"> Welcome to ${process.env.PROJECT_NAME} </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                   <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;"> Hi ${content.name}, </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                   <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;"> Congratulations. You are now a part of ${process.env.PROJECT_NAME}. To finish setting up your account and start using ${process.env.PROJECT_NAME}, confirm we’ve got the correct email for you. </div>
                                                </td>
                                             </tr>
                                             <tr>
                                                <td align="center" vertical-align="middle" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:300px;line-height:100%;">
                                                      <tbody>
                                                         <tr>
                                                            <td align="center" bgcolor="#5e6ebf" role="presentation" style="border:none;border-radius:3px;cursor:auto;padding:10px 25px;background:#5e6ebf;" valign="middle"> 
                                                               <a href="${content.link}" style="background:#5e6ebf;color:#ffffff;font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:17px;font-weight:bold;line-height:120%;Margin:0;text-decoration:none;text-transform:none;" target="_blank">
                                                               Verify your email
                                                               </a> 
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                </td>
                                             </tr>
                                             <!-- <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                   <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;"> <span style="color: #ff0000">This link is valid for only 15 mins.</span> </div>
                                                </td>
                                             </tr> -->
                                             <tr>
                                                <td align="left" style="font-size:0px;padding:10px 25px;word-break:break-word;">
                                                   <div style="font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:16px;font-weight:400;line-height:24px;text-align:left;color:#637381;"> or copy and paste the link into your browser <a href="${content.link}">${content.link}</a> </div>
                                                </td>
                                             </tr>
                                          </tbody>
                                       </table>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </td>
               </tr>
            </tbody>
         </table>
      </div>
   </div>
</body>
</html>`;

module.exports = welcome;