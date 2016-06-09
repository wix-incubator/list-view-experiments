//
//  RNTableViewChildren.h
//  example
//
//  Created by Tal Kol on 6/8/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>
@class RCTBridge;

@interface RNTableViewChildren : UIView

- (instancetype)initWithBridge:(RCTBridge *)bridge NS_DESIGNATED_INITIALIZER;

@property (nonatomic) float rowHeight;
@property (nonatomic) NSInteger dataSourceSize;

@end
