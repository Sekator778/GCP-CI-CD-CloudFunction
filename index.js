//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>–°loudFunction build Sekator from main brunch + inet!</font><br><b>App Version 1.1.1</b>";
  res.status(200).send(message);
};
