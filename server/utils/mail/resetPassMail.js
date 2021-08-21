const resetPassMail = ( url ) => {
    return `
        <div>
            <div style=" background: #005CE4; width:100%;">
                <div style=" padding: 20px 5px; ">
                    <div>
                        <div style=" text-align: center; padding: 0 0 10px; ">
                            <img src="https://res.cloudinary.com/aztec/image/upload/v1628835243/logoaztec_ojo89m.png" alt=""
                                style=" width: 140px; ">
                        </div>
                        <div style=" padding: 20px 4px; background: #f7f7f7; border-radius: 10px; ">
                            <div cellpadding="0" cellspacing="0" width="100%">
                                <div align="center">
                                    <br />
                                    <div
                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:12px;line-height:18px;padding-left:0;padding-right:0;padding:20px 20px 0px;font:500 16px/22px Arial,Helvetica,sans-serif,Fira">
                                        <h3>Your password has been reset successfully.</h3>
                                    </div>
                                    <br />
                                    <div>
                                        <img alt=""
                                            src="https://res.cloudinary.com/aztec/image/upload/v1629035378/nutmeg_zamcfr.gif"
                                            style=" width: 300px; " />
                                    </div>
                                    <div
                                        style="font-family:Helvetica,Arial,Helvetica,sans-serif;color:#111111;font-size:12px;line-height:18px;padding-left:0;padding-right:0;padding:20px 20px 0px;font:500 16px/22px Arial,Helvetica,sans-serif,Fira">
                                        <br>
                                        Just click the button below to Login AZtecCNC :
                                    </div>
                                    <div>
                                        <a href=${url}
                                            style="font-family:Helvetica,Arial,Helvetica,sans-serif;font-weight:bold;padding:10px;color:#fff;text-decoration:none;display:block;background: #005CE4;width: 240px;border-radius: 10px;margin: 10px;">
                                            Login
                                        </a>
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

module.exports = resetPassMail