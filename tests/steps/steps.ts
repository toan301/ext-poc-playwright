import { OnboardingSteps } from '../steps/onboarding_steps';
import { HomePageSteps } from '../steps/home_steps';
import { SettingsPageSteps } from '../steps/settings_page_steps';
import {ManageCryptoSteps} from "./manage_crypto_steps";
import {SwapSteps} from "./swap_steps";

export class Steps {
    static onboarding: OnboardingSteps;
    static home: HomePageSteps;
    static settings: SettingsPageSteps;
    static manageCrypto: ManageCryptoSteps;
    static swap: SwapSteps;

    static initializeSteps(page: any, context: any) {
      this.onboarding = new OnboardingSteps(page);
      this.home = new HomePageSteps(page);
      this.settings = new SettingsPageSteps(page);
      this.manageCrypto = new ManageCryptoSteps(page);
      this.swap = new SwapSteps(page, context);
    }
  }