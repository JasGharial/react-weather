// This Utility is used to hold methods of improving utilization of images

// This method is used to remove the "//" in front of icon url in condition object
export const getTrimmedConditionIcon = (img_url) => {
  if (typeof img_url !== 'undefined' ) {
    return 'https:' + img_url
  }
}