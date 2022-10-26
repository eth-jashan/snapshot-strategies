// import { error } from 'console';
// import { subgraphRequest } from '../../utils';

// export const author = 'rep3-gg';
// export const version = '1.0.0';

// const REP3_SUBGRAPH_API_URLS_BY_CHAIN_ID = {
//   '80001': 'https://api.thegraph.com/subgraphs/name/eth-jashan/rep3-mumbai',
//   '137': 'https://api.thegraph.com/subgraphs/name/eth-jashan/rep3-matic'
// };

// function fetchMembershipsForAddress(
//   network: string,
//   contractAddress: string,
//   blockTag: number | string
// ): Promise<any> {
//   const url = REP3_SUBGRAPH_API_URLS_BY_CHAIN_ID[network];

//   if (url == undefined) {
//     throw new error(`Unsupported network with id: ${network}`);
//   }

//   const query = {
//     membershipNFTs: {
//       __args: {
//         where: {
//           contractAddress: contractAddress
//           // claimer: claimer
//         },
//         block: blockTag != 'latest' ? { number: blockTag } : null
//       },
//       time: true,
//       level: true,
//       tokenID: true,
//       claimer: true
//     }
//   };

//   return subgraphRequest(url, query);
// }

// function fetchAssociationBadgesForAddress(
//   network: string,
//   contractAddress: string,
//   blockTag: number | string
// ): Promise<any> {
//   const url = REP3_SUBGRAPH_API_URLS_BY_CHAIN_ID[network];

//   if (url == undefined) {
//     throw new error(`Unsupported network with id: ${network}`);
//   }

//   const query = {
//     associationBadges: {
//       __args: {
//         where: {
//           contractAddress: contractAddress
//           // claimer: claimer
//         },
//         block: blockTag != 'latest' ? { number: blockTag } : null
//       },
//       type: true,
//       claimer: true,
//       tokenID: true
//     }
//   };

//   return subgraphRequest(url, query);
// }

// // function fetchAssociationbadgesForMembership(
// //   network: string,
// //   contractAddress: string,
// //   claimer: string,
// //   blockTag: number | string
// // ): Promise<any> {
// //   const url = REP3_SUBGRAPH_API_URLS_BY_CHAIN_ID[network];

// //   if (url == undefined) {
// //     throw new error(`Unsupported network with id: ${network}`);
// //   }

// //   const query = {
// //     membershipNFTs: {
// //       __args: {
// //         where: {
// //           contractAddress: contractAddress,
// //           claimer: claimer
// //         },
// //         block: blockTag != 'latest' ? { number: blockTag } : null
// //       },
// //       time: true,
// //       level: true,
// //       tokenID: true
// //     }
// //   };

// //   return subgraphRequest(url, query);
// // }

// // function getBadgeWeight(specs: any[], badgeSpecID: string): number {
// //   let badgeWeight = 0;

// //   if (specs && specs.length > 0) {
// //     const specConfig = specs.find((spec: any) => spec.id === badgeSpecID);
// //     badgeWeight =
// //       specConfig && !isBadgeExpired(specConfig.expiresAt)
// //         ? specConfig.weight
// //         : 0;
// //   } else {
// //     badgeWeight = 1;
// //   }

// //   return badgeWeight;
// // }

// // function isBadgeExpired(expiresAt: string | null): boolean {
// //   return expiresAt ? Date.now() - Number(new Date(expiresAt)) > 0 : false;
// // }

// // function applyBadgeWeights(badges: [], options: any) {
// //   const badgeWeights = {};

// //   badges.forEach((badge: any) => {
// //     const badgeAddress = badge.owner.toLowerCase();

// //     if (badgeWeights[badgeAddress]) return;

// //     badgeWeights[badgeAddress] = getBadgeWeight(options.specs, badge.spec.id);
// //   });

// //   return badgeWeights;
// // }

// const calculateBadgeWeight = (
//   membershipBadegs: [],
//   associationBadges: [],
//   options: any
// ) => {
//   // const badgeWeight = {}
// };

// export async function strategy(
//   space,
//   network,
//   provider,
//   addresses,
//   options,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   snapshot
// ) {
//   const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';

//   const allMembershipbadges = await fetchMembershipsForAddress(
//     network,
//     options.rep3DaoAddress,
//     blockTag
//   );
//   const getAllAssociationBadges = await fetchAssociationBadgesForAddress(
//     network,
//     options.rep3DaoAddress,
//     blockTag
//   );
//   // let badgeWeights = {};
//   // const badges = getBadgesResponse?.badges;
//   // if (!badges) return badgeWeights;

//   // badgeWeights = applyBadgeWeights(badges, options);

//   // return Object.fromEntries(
//   //   addresses.map((address: string) => [
//   //     address,
//   //     badgeWeights[address.toLowerCase()] || 0
//   //   ])
//   // );
// }
