import { CapacitorProject } from '@capacitor/project';
import { CapacitorConfig } from '@capacitor/cli';

// This takes a CapacitorConfig, such as the one in capacitor.config.ts, but only needs a few properties
// to know where the ios and android projects are
const config: CapacitorConfig = {
  ios: {
    path: 'ios',
  },
  android: {
    path: 'android',
  },
};

const updateIosProject = async () => {
  const project = new CapacitorProject(config);
  await project.load();
  console.log(project);
  const appTarget = project.ios?.getAppTarget();
  project.ios.setBundleId((appTarget.name), null, 'io.ionic.chainfox');
  await project.ios.setDisplayName(appTarget.name, 'Release', 'ChainFox');
  await project.ios.setDisplayName(appTarget.name, 'Debug', 'ChainFox');
  await project.ios.setVersion(appTarget.name, null, '0.0.1');
  await project.ios?.updateInfoPlist(appTarget.name, null, {
    NSCameraUsageDescription: 'To scan QR Codes',
    NSFaceIDUsageDescription: 'To scan confirm payments',
    NSPhotoLibraryUsageDescription: 'To upload photo',
    UIRequiresPersistentWiFi: 'To connect to backend servers'


  });
  // add permissions

  await project.commit();

};

updateIosProject();



