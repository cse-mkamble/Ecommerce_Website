const forgotPassMail = ( url, CONTACT_US) => {
    return `
        <div>
            <div style=" background: #005CE4; width:100%;">
                <div style=" padding: 20px 5px; ">
                    <div>
                        <div style=" text-align: center; padding: 0 0 10px; ">
                            <img src="https://res.cloudinary.com/aztec/image/upload/v1628835243/logoaztec_ojo89m.png" alt=""
                                style=" width: 140px; ">
                        </div>
                        <div style=" padding: 20px 4px; background: #fff; border-radius: 10px; ">
                            <div cellpadding="0" cellspacing="0" width="100%">
                                <div align="center">
                                    <br />
                                    <br />
                                    <div
                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:14px;line-height:18px;padding:0 0 8px;font:500 24px/22px Arial,Helvetica,sans-serif,Fira;color:#0e2f5a">
                                        Reset your password
                                    </div>
                                    <div style="border-bottom: 1px solid lightsteelblue;"></div>
                                    <div
                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:12px;line-height:18px;padding-left:0;padding-right:0;padding:20px 20px 0px;font:500 16px/22px Arial,Helvetica,sans-serif,Fira">
                                        <br>
                                        Someone (hopefully you) has requested a password reset for your AZtecCNC account.
                                        <br>
                                        Just click the button below to set a new password:
                                    </div>
                                    <div>
                                        <a href=${url}
                                            style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-weight:bold;padding:10px;color:#fff;text-decoration:none;display:block;background: #005CE4;width: 240px;border-radius: 10px;margin: 10px;">
                                            Reset your password
                                        </a>
                                    </div>
                                    <div style="padding: 0 20px;">
                                        <br>
                                        <div
                                            style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:12px;font-weight:normal">
                                            If the button does not work for any reason, you
                                            can also paste the following into your browser:
                                            <a href=${url}
                                                style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;line-height:18px;font-weight:bold;color:#005ce4;font-size:12px;font-weight:normal">${url}</a>
                                        </div>
                                        <br>
                                        <div
                                            style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-size:14px;font-weight:normal">
                                            Note: You must perform this validation within the next 24 hours to keep your new account
                                            enabled.
                                            <br>
                                            <br>
                                            If you encounter any problem, please contact us at<div> ${CONTACT_US}</div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div align="center">
                            <div style=" text-align: center; padding: 10px; ">
                                <img src="https://res.cloudinary.com/aztec/image/upload/v1628657771/logo192_ms1tie.png" alt=""
                                    style=" width: 80px; ">
                            </div>
                            <div
                                style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:12px;line-height:18px;padding:0 0 10px;font:500 12px/18px Arial,Helvetica,sans-serif,Fira;color:#fff">
                                © 2021 AZtecCNC. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

module.exports = forgotPassMail