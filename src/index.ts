import type { Core } from '@strapi/strapi';
import { seedConsularServices, seedNewsArticles } from './bootstrap';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Seed data on startup if collections are empty
    try {
      await seedConsularServices(strapi);
      await seedNewsArticles(strapi);
    } catch (error) {
      strapi.log.error('Error during bootstrap seeding:', error);
    }
  },
};
